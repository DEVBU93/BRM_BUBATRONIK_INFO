# Assets download helper

This script attempts to mirror public assets from https://brm.worldmos.es and copy common
visual files (favicons, logo, OG image) into the repository under /assets/img and /assets/icons.

Usage (run locally):

  chmod +x download-assets.sh
  ./download-assets.sh

After running, inspect assets/ and commit the files you want to include.

Note: The script uses wget to mirror the site and then copies likely filenames into the repo.
It may fetch extra files into tmp/ which you can inspect and prune before committing.
