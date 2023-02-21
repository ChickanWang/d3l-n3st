import { prev } from '../../src/members.js';

export default function Home({ referrer }) {

    return (
        <>
        {prev.has(referrer) ? (
            <div>
                <a href={prev.get(referrer)}>to prev</a> 
            </div>
        ) : (
            <div>
                <div>
                the previous website was not part of the webring
                </div>
                <div>
                    return <a href="/">home</a>
                </div>
            </div>
        )}
        </>
    )
}

export function getServerSideProps(context) {
    return {
        props: {referrer: context.req.headers.referer},
    };
}
