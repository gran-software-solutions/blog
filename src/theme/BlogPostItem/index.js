import React from 'react';
import {useBlogPost} from '@docusaurus/theme-common/internal'
import BlogPostItem from '@theme-original/BlogPostItem';
import GiscusComponent from '@site/src/components/GiscusComponent';
import useIsBrowser from '@docusaurus/useIsBrowser';
import CookieConsent, { Cookies } from "react-cookie-consent";

export default function BlogPostItemWrapper(props) {
    const {metadata, isBlogPostPage} = useBlogPost()
    const isBrowser = useIsBrowser();

    const {frontMatter, slug, title} = metadata
    const {enableComments} = frontMatter

    return (
        <>
            <CookieConsent
                expires={233}
                cookieName={"cookieConsentGivenOn"}
                cookieValue={new Date().toISOString()}
            >
                We use Cookies to deliver and improve our content. Please consult our <a href="https://www.gransoftware.de/privacy-policy">privacy policy</a>
            </CookieConsent>

            <BlogPostItem {...props} />
            {(enableComments && isBlogPostPage) && (
                <GiscusComponent/>
            )}
        </>
    );
}