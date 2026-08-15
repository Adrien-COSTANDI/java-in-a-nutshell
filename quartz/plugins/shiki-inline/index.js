export default function ShikiInline() {
  return {
    name: "Shiki Inline Compatibility",

    textTransform(_ctx, src) {
      return src.replace(
        /`(\{([A-Za-z0-9_+#.-]+)\}\s*)([^`\n]+)`/g,
        (_match, _prefix, language, code) => {
          return `\`${code}{:${language}}\``
        },
      )
    },
  }
}