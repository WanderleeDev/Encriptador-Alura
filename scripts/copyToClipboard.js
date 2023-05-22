//uso de api 
export async function copyToClipboard(tagSelected) {
  const target = document.querySelector(tagSelected);
  if (target) {
    const text = target.textContent;
    await navigator.clipboard.writeText(text);
    target.classList.add('copySuccessful');
  }
}
