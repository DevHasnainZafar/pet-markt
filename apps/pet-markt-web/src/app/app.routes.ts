import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: async()=> {
      const mod = await import('./home/home')
      return mod.Home
    }
    // loadComponent: () => import('./home/home').then(m => m.Home),
  },
  {
    path: 'products',
    loadComponent: async()=> {
      const mod = await import('./products/products')
      return mod.Products
    }
    // loadComponent: () => import('./products/products').then(m => m.Products),
  },
  {
    path: 'cart',
    loadComponent: async()=> {
      const mod = await import('./cart/cart')
      return mod.Cart
    }
  },
];
