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
  const reloadDummies: () => Promise<Dummy[]> = useRecoilCallback(
    ({ set }) =>
      async () => {
        const res = await gql.getDummies();
        res.dummies?.map((data) => set(dummiesState(data.id), data));
        set(
          dummyIdsState,
          res.dummies.map((data) => data.id)
        );
        return res.dummies;
      },
    []
  );

  /**
   * データを新規作成する。
   */
  const createDummy: ({ data }: { data: DummyCreateInput }) => Promise<Dummy> = useRecoilCallback(
    ({ set }) =>
      async ({ data }: { data: DummyCreateInput }) => {
        const res = await gql.createDummy({ data: data });
        set(dummiesState(res.createDummy.id), res.createDummy);

        if (!ids.includes(res.createDummy.id)) {
          set(dummyIdsState, [...ids, res.createDummy.id]);
        }

        return res.createDummy;
      },
    [ids]
  );

  /**
   * データを更新する。
   */
  const updateDummy: ({
    data,
    where
  }: {
    data: DummyUpdateInput;
    where: DummyWhereUniqueInput;
  }) => Promise<Dummy> = useRecoilCallback(
    ({ set }) =>
      async ({ data, where }: { data: DummyUpdateInput; where: DummyWhereUniqueInput }) => {
        const res = await gql.updateDummy({ where: where, data: data });
        set(dummiesState(res.updateDummy.id), res.updateDummy);
        return res.updateDummy;
      },
    []
  );

  /**
   * データを削除する。
   */
  const deleteDummy: ({ where }: { where: DummyWhereUniqueInput }) => Promise<string> =
    useRecoilCallback(
      ({ set }) =>
        async ({ where }: { where: DummyWhereUniqueInput }) => {
          const res = await gql.deleteDummy({ where: where });
          set(dummiesState(res.deleteDummy.id), null);
          set(
            dummyIdsState,
            ids.filter((id) => {
              return id !== res.deleteDummy.id;
            })
          );
          return res.deleteDummy.id;
        },
      [ids]
    );

  return {
    reloadDummies,
    createDummy,
    updateDummy,
    deleteDummy
  };
};

export { useDummyDispatcher };
