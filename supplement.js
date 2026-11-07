/* Add your final files at these paths. Missing files keep their clear placeholders. */
const RECORDING_PATH = './assets/first-lbm-run.mp4';

async function fileIsReady(path, expectedType) {
  try {
    const response = await fetch(path, { method: 'HEAD', cache: 'no-store' });
    const type = (response.headers.get('content-type') || '').toLowerCase();
    return response.ok && type.includes(expectedType);
  } catch {
    return false;
  }
}

async function enablePdf(link) {
  const path = link.dataset.pdf;
  if (!(await fileIsReady(path, 'application/pdf'))) return;
  link.href = path;
  link.setAttribute('download', '');
  link.removeAttribute('aria-disabled');
  link.removeAttribute('tabindex');
  link.classList.remove('pending');
  link.querySelector('.pending-label')?.remove();
}

async function enableRecording() {
  if (!(await fileIsReady(RECORDING_PATH, 'video/'))) return;
  const video = document.getElementById('airflow-video');
  video.src = RECORDING_PATH;
  video.hidden = false;
  document.getElementById('video-placeholder').hidden = true;
}

Promise.allSettled([
  ...Array.from(document.querySelectorAll('[data-pdf]'), enablePdf),
  enableRecording()
]);
