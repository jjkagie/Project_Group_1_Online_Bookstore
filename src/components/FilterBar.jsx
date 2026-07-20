function FilterBar({filter,setFilter}){
    return (
        <select
        value={filter}
        onChange={(e)=>setFilter(e.target.value)}
        >

            <option>All</option>
            <option>Fantasy</option>
            <option>Mystery</option>
            <option>Romance</option>

        </select>
    );
}
export default FilterBar;