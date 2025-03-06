import Link from 'next/link'

export default function projectCard({link, topic, content}) {
    return(
        <Link href={link}>
        <div className="project-card">
            <h2>{topic}</h2>
            <p>{content}</p>
        </div>
        </Link>
        
    
    );
}