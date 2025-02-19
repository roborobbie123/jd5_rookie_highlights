export default function Clip({ title, link }) {
    return (
        <div>
            <h4>{title}</h4>
        <iframe width="560" height="315" src={link} frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
        </div>
    );
}