// Uncaught error exception

Cypress.on('uncaught:exception', (err, runnable) => {
  console.error('Uncaught exception:', err.message);
  if (err.message.includes('ResizeObserver loop completed with undelivered notifications')) {
    return false;
  }
  return true;
});
