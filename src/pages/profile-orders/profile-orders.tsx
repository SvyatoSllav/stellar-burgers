import { ProfileOrdersUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC, useEffect } from 'react';
import { useSelector, useDispatch } from '../../services/store';
import {
  getOrders,
  ordersSelector
} from '../../services/slices/orderSlice/orderSlice';

export const ProfileOrders: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  const orders: TOrder[] = useSelector(ordersSelector);

  return <ProfileOrdersUI orders={orders} />;
};
