const PRODUCT = {
  content_name: 'Naturale - Recetas para Sanar el Hígado Graso',
  content_type: 'product',
  content_ids: ['naturale-guia-higado'],
  value: 17.99,
  currency: 'USD',
};

const fire = (event, params) => {
  if (typeof window.fbq !== 'function') return;
  window.fbq('track', event, params);
};

export const trackViewContent = () => fire('ViewContent', PRODUCT);

export const trackInitiateCheckout = () => {
  fire('AddToCart', { ...PRODUCT, num_items: 1 });
  fire('InitiateCheckout', { ...PRODUCT, num_items: 1 });
};

export const openCheckoutModal = () => {
  fire('InitiateCheckout', { ...PRODUCT, num_items: 1 });
  window.dispatchEvent(new CustomEvent('naturale:checkout'));
};
