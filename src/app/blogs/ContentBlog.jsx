import React from 'react';
import img from '@/assets/14small.webp';
import Image from 'next/image';
import Link from 'next/link';

export const ContentBlog = () => {
    const blogs = [
        {
            title: "Conquering the Himalayas: A Beginner’s Guide",
            description:
                "An in-depth guide for first-time trekkers preparing to explore the Himalayas, covering gear, routes, and safety tips.",
            categories: ["Adventure", "Travel", "Guides"],
            author: "Ravi Shrestha",
            location: "Kathmandu, Nepal",
            publishDate: "2025-08-10",
        },
        {
            title: "The Future of Sustainable Tourism",
            description:
                "Exploring eco-friendly travel trends and how destinations are adapting to climate challenges while preserving culture.",
            categories: ["Environment", "Travel", "Sustainability"],
            author: "Ananya Desai",
            location: "Goa, India",
            publishDate: "2025-07-28",
        },
        {
            title: "Mastering Altitude Training for Peak Performance",
            description:
                "Learn how altitude training can boost your endurance and the best practices for acclimatization.",
            categories: ["Fitness", "Health", "Adventure"],
            author: "David Lama",
            location: "Leh, Ladakh",
            publishDate: "2025-08-01",
        },
        {
            title: "Capturing the Perfect Mountain Sunrise",
            description:
                "Photography tips for breathtaking sunrise shots in high-altitude locations, from gear selection to composition.",
            categories: ["Photography", "Travel", "Tips"],
            author: "Maya Gurung",
            location: "Darjeeling, India",
            publishDate: "2025-06-15",
        },
        {
            title: "Top 10 Hidden Trails in the Himalayas",
            description:
                "Discover off-the-beaten-path trekking routes in the Himalayas that offer solitude, stunning views, and unique cultural experiences.",
            categories: ["Adventure", "Hiking", "Exploration"],
            author: "Siddharth Thapa",
            location: "Pokhara, Nepal",
            publishDate: "2025-08-12",
        },
    ];
  return (
    <div className="blog-contents">

        <div className="header-content">
            <div className="title">Blogs</div>
        </div>
        <div className="blog-switch">
            <div className="switch-button">
                <div className="btn-primary active">All Blogs</div>
                <div className="btn-primary">Latest</div>
            </div>
        </div>
        {
            blogs.map((item, index) => (
            <div key={index}>
                <Link href={'#'}>
                <div className="blog-card" >
                    <div className="image">
                    <Image src={img} alt='image' />
                    </div>
                    <div className="text-contents">
                    <div className="text-left">
                        <div className="blog-tags">
                            {item.categories.map((cate, i) => (
                                <div className="tag" key={i}>{cate}</div>
                            ))}
                        </div>
                        <div className="blog-title">
                        {item.title}
                        </div>
                        <div className="blog-description">
                        {item.description}
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="blog-meta">
                        <span className="author">{item.author}</span> |{" "}
                        <span className="location">{item.location}</span> |{" "}
                        <span className="date">{item.publishDate}</span>
                        </div>
                    </div>
                    </div>                
                </div>
                </Link>
                <div className="underline"></div>
            </div>
            ))
        }
        <div className="btn-primary-dark">More Blogs</div>
    </div>
  )
}
