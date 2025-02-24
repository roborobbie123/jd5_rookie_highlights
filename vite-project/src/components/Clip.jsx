export default function Clip({ week }) {
    return (
        <div>
            <h4>{week.title}</h4>
        <iframe width="560" height="315" src={week.link} frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
        </div>
    );
}