document.addEventListener("DOMContentLoaded", () => {
    const rows = document.querySelectorAll(".inner-table tr");

    rows.forEach(row => {
        row.style.cursor = "pointer";

        row.addEventListener("click", () => {
            const text = row.textContent.trim();

            const folderName = text
                .toLowerCase()
                .replace(/'/g, "")
                .replace(/\s+/g, "-");

            window.location.href = `../${folderName}/index.html`;
        });
    });
});
