

export default function AdminDashboard() {
    const pages = ["Home", "About", "Contact", "Gallery"];

    const handlePageClick = (page: string) => {
        alert(`Redirect to: /${page.toLowerCase()}`);
        // Add routing logic here if using React Router or Next.js
    };

    return (
            <div className="dashboard">
                <h1>View Pages</h1>
                <div className="page-cards">
                    {pages.map((page, index) => (
                        <div className="card" key={index} onClick={() => handlePageClick(page)}>
                            <h3>{page}</h3>
                            <p>Click to visit {page} page</p>
                        </div>
                    ))}
                </div>
            </div>
    );
}
