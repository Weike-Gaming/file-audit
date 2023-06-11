# File Audit action

Check for files that are not suppose to be Merged

## Inputs

### `files-to-check`

**Required** The name of the files that's not suppose to be merge

## Example usage

```yaml
uses: Weike-Gaming/file-audit@8c66cd0497e45ddf41a902e7bc82c8487127b984
with:
  files-to-check:  ["AM_Mixer"]
```