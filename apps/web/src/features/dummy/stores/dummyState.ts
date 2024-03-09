// eslint-disable-next-line @nx/enforce-module-boundaries
import { gql } from '@/lib/graphql-client';
import { Dummy } from '@libs/web/data-access-graphql';
import { atom, atomFamily, selector, selectorFamily, useRecoilValue } from 'recoil';

/**
 * 初期データ。dummyIdsState と dummiesState の初期データを格納するための状態。
 * 初期データ格納以外では利用しない。
 */
const initialDataState = atom<Dummy[] | null>({
  key: 'dummy/initialDataState',
  default: selector({
    key: 'dummy/initialDataState/default',
    get: async () => {
      try {
        return (await gql.getDummies()) as unknown as Dummy[];
      } catch (error) {
        if (error instanceof Error) {
          console.log(error);
        }
      }
      return null;
    }
  })
});

/**
 * dummy ID のリスト
 */
export const dummyIdsState = atom<string[]>({
  key: 'dummy/dummyIdsState',
  default: selector({
    key: 'dummy/dummyIdsState/default',
    get: async ({ get }) => {
      // TODO: .map が function ではないとエラーが発生する。
      const data = await get(initialDataState);
      console.log(data);
      if (data) {
        return data.map((d) => d.id);
      }
      return [];
    }
  })
});

/**
 * dummy ID に対応するデータ群。データ更新等は、この状態を変更する必要がある。
 */
export const dummiesState = atomFamily<Dummy | null, string>({
  key: 'dummy/dummiesState',
  default: selectorFamily({
    key: 'dummy/dummiesState/default',
    get:
      (id: string) =>
      ({ get }) => {
        return get(initialDataState)?.find((d) => d.id === id) ?? null;
      }
  })
});

/**
 * 全ての dummy データを取得
 */
const dummiesSelector = selector({
  key: 'dummy/dummiesSelector',
  get: ({ get }) => {
    return get(dummyIdsState).map((id) => get(dummiesState(id)));
  }
});

/**
 * 指定した id の dummy データを取得
 */
const dummySelector = selectorFamily({
  key: 'dummy/dummySelector',
  get:
    (id: string) =>
    ({ get }) => {
      return get(dummiesState(id));
    }
});

/**
 * データを取得するセレクターを集約したオブジェクト（Read系）
 */
export const dummySelectors = {
  useGetDummies: () => useRecoilValue(dummiesSelector),
  useGetDummy: (id: string) => useRecoilValue(dummySelector(id))
};
