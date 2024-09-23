import {MetaInterface} from "@/components/seo/Meta.interface";
import Head from "next/head";


const getTitle = (title: string) => `${title} | Ясно`;
function Meta({title, description, children}: MetaInterface) {
    return <>
        <Head>
            <title>{getTitle(title)}</title>
            {description ? (
                <>
                    <meta name='description' content={description} />
                    <meta name='og:title' content={getTitle(title)} />
                    <meta name='og:description' content={description} />
                </>
            ) : (
            <meta name='robots' content='noindex, nofollow'/>
            )}
        </Head>
        {children}
        </>
}

export default Meta;