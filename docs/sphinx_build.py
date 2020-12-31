import os
import subprocess

srcdir = os.path.join(os.environ.get('TMP_DIR'), 'docs')
subprocess.Popen(['sphinx-build', '-b', 'html', str(srcdir), str(os.path.join(srcdir, '_build'))])
