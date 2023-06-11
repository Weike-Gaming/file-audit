# File Audit action

Check for files that are not suppose to be Merged

## Inputs

### `files-to-check`

**Required** The name of the files that's not suppose to be merge

## Example usage

```yaml
uses: weike-gaming/file-audit@version
with:
  files-to-check:  ["AM_Mixer"]
```