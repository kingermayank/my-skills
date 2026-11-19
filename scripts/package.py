from pathlib import Path
import shutil
import zipfile

root = Path(__file__).resolve().parents[1]
source = root / 'skills' / 'ai-branding'
public = root / 'public' / 'downloads'
destination = public / 'ai-branding'
shutil.copytree(source, destination, dirs_exist_ok=True)
with zipfile.ZipFile(public / 'ai-branding.zip', 'w', zipfile.ZIP_DEFLATED) as archive:
    for path in sorted(source.rglob('*')):
        if path.is_file():
            archive.write(path, Path('ai-branding') / path.relative_to(source))
print('Packaged AI Branding source and ZIP.')
