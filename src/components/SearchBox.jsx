export default function SearchBox({
    value,
    onChange,
}) {
    return (
        <input
            className="border p-2 w-full mb-3"
            placeholder="Search users..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}