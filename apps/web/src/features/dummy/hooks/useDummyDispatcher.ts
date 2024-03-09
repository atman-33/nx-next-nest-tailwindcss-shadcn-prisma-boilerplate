// eslint-disable-next-line @nx/enforce-module-boundaries
import { gql } from '@/lib/graphql-client';
import {
  Dummy,
  DummyCreateInput,
  DummyUpdateInput,
  DummyWhereUniqueInput
} from '@libs/web/data-access-graphql';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import { dummiesState, dummyIdsState } from '../stores/dummyState';

/**
 * useXxxDispatcher は、recoil に対して、データを追加/更新/削除（Write系）するための関数を返す。
 * @returns
 */
const useDummyDispatcher = () => {
  const ids = useRecoilValue(dummyIdsState);

  /**
   * データを再読み込みする。
   */
  const reloadDummies = useRecoilCallback(
    ({ set }) =>
      async () => {
        const dummies = (await gql.getDummies()) as unknown as Dummy[];
        dummies?.map((data) => set(dummiesState(data.id), data));
        set(
          dummyIdsState,
          dummies.map((data) => data.id)
        );
      },
    []
  );

  /**
   * データを新規作成する。
   */
  const createDummy = useRecoilCallback(
    ({ set }) =>
      async (data: DummyCreateInput) => {
        const newDummy = (await gql.createDummy({ data: data })) as unknown as Dummy;
        set(dummiesState(newDummy.id), newDummy);

        // 新規作成した場合はIdsStateに、idを追加
        if (!ids.includes(newDummy.id)) {
          set(dummyIdsState, [...ids, newDummy.id]);
        }
      },
    []
  );

  /**
   * データを更新する。
   */
  const updateDummy = useRecoilCallback(
    ({ set }) =>
      async (data: DummyUpdateInput, where: DummyWhereUniqueInput) => {
        const dummy = (await gql.updateDummy({ where: where, data: data })) as unknown as Dummy;
        set(dummiesState(dummy.id), dummy);
      },
    []
  );

  /**
   * データを削除する。
   */
  const deleteDummy = useRecoilCallback(
    ({ set }) =>
      async (where: DummyWhereUniqueInput) => {
        const dummy = (await gql.deleteDummy({ where: where })) as unknown as Dummy;
        set(dummiesState(dummy.id), null);
        set(
          dummyIdsState,
          ids.filter((id) => {
            return id !== where.id;
          })
        );
      },
    []
  );

  return {
    reloadDummies,
    createDummy,
    updateDummy,
    deleteDummy
  };
};

export { useDummyDispatcher };
