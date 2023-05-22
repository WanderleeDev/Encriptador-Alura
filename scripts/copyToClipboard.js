export async function copyToClipboard(tagSelected) {
  const target = document.querySelector(tagSelected);
  if (target) {
    const text = target.textContent;
    await navigator.clipboard.writeText(text.trim());
    target.classList.add('copySuccessful');
  }
}

export async function copyToClipboardSecret(tagSelected) {
  const target = document.querySelector(tagSelected);
  const target2 = document.querySelector('.boxSecret');
  if (target) {
    const text = target.textContent;
    await navigator.clipboard.writeText(text.trim());
    target2.classList.remove('moveBlock');
  }
}
