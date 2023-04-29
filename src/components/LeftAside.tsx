import React from 'react'
import styles from "@/styles/Introduce.module.css"

function LeftAsdie() {
    return (
        <aside className={styles.left_sidebar}>
            <div className={styles.profile_picture}>
                <img src="../me.jpeg" alt="Profile picture"></img>
            </div>
            <div className={styles.greeting}>
                <h2>박범준</h2>
                <div className={styles.social_links}>
                    <div className={styles.social_links_div}>
                        <a href="https://github.com/bakpark" target="_blank" rel="noopener noreferrer">
                            <p>GitHub</p>
                        </a>
                        <img src="/images/github.svg" className={styles.icon_small} />
                    </div>
                    <div className={styles.social_links_div}>
                        <a href="https://www.linkedin.com/in/beomjun-park-728290181/" target="_blank" rel="noopener noreferrer">
                            <p>LinkedIn</p>
                        </a>
                        <img src="/images/linkedin.svg" className={styles.icon_small} />
                    </div>
                    <div className={styles.social_links_div}>
                        <a href="https://www.instagram.com/bakparkbj/" target="_blank" rel="noopener noreferrer">
                            <p>Instagram</p>
                        </a>
                        <img src="/images/instagram.svg" className={styles.icon_small} />
                    </div>
                </div>
            </div >
        </aside >
    );
}

export default LeftAsdie;