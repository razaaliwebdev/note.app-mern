export function formatDate(input) {
    if (!input) return "Invalid Date";

    let date;

    // Handle Firebase/MongoDB timestamp
    if (typeof input === "object" && input?.seconds) {
        date = new Date(input.seconds * 1000);
    }
    // Handle ISO strings or timestamps
    else {
        date = new Date(input);
    }

    // Validate date
    if (isNaN(date.getTime())) {
        return "Invalid Date";
    }

    return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
    });
}
