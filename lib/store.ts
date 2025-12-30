import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '@/features/auth/authSlice';
import { cartSlice } from '@/features/cart/cartSlice';
import { ordersSlice } from '@/features/orders/ordersSlice';
import { productsSlice } from '@/features/products/productsSlice';
import { profileSlice } from '@/features/profile/profileSlice';
import { storySlice } from '@/features/story/storySlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    orders: ordersSlice.reducer,
    products: productsSlice.reducer,
    profile: profileSlice.reducer,
    story: storySlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;