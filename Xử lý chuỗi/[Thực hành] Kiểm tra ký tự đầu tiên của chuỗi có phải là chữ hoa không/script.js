function isFirstLetterUpperCase(str) {
    regexp = /^[A-Z]/;
    if (regexp.test(str)) {
        document.write("String's first character is uppercase");
    } else {
        document.write("String's first character is not uppercase");
    }
}