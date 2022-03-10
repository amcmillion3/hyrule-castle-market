import image from "../../assets/Market Exterior.jpeg";

export default function Home() {
    return (
        <div className="home-page">
            <h2>WELCOME TO HYRULE CASTLE MARKET!</h2>
            <img src={image} alt="Market Exterior" />
        </div>
    )
}