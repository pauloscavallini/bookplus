

export default function BookGrid({children}) {
    return (
    <div className="container pt-5 px-0">
        <div className="row gap-0 g-0 gap-lg-2 gap-md-1 d-flex justify-content-between">
            {children}
        </div>
    </div>)
}