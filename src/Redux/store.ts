import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './Services/contactsApi';

export const store = configureStore({
   reducer: {
      [contactsApi.reducerPath]: contactsApi.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(contactsApi.middleware),
});
