import PageNotFoundPNG from "../../assets/page-not-found.png"

const PageNotFound = () => {
    return (
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
            <h2 className="text-light fs-1 mt-2">
               That page doesn't exist!
            </h2>
            <h3 className="text-light mt-2"> 
               Sorry, we couldn't find what you were looking for or the page no longer exists.
            </h3>
            <img src={PageNotFoundPNG} alt="Page not found PNG Logo"/>
        </div>
    )
}

export default PageNotFound;