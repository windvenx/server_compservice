import React from 'react';
import styles from '../styles/Home/Blog.module.scss'

const Blog = () => {
    return (
        <section className={styles.blog}>
            <div className="container">
                <h2>Публикации в блоге</h2>
                <div className={styles.blog__card}>
                    <p className={styles.blog__date}></p>
                    <h3></h3>
                    <p></p>
                </div>
                <div className={styles.blog__card}></div>
                <div className={sblog__card"></div>
            </div>
        </section>
    );
};

export default Blog;