import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import HomepageFeatures from '../components/Homepage/Features';
import LatestNews from '../components/LatestNews';
export default function Home({ homePageBlogMetadata, recentPosts }) {
  return (
    <Layout
      title="QMenu Documentation"
      description="QMenu documentation, guides, updates, and API">
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1 className="hero__title">QMenu-ийн гарын авлагат тавтай морилно уу</h1>
            <p className="hero__subtitle">
              Гарын авлагаас эхлээд API-ийн баримт бичиг хүртлэх QMenu-ийн тухай бүх мэдээллийг эндээс.</p>
            <div className="margin-top--lg">
              <Link
                className="button button--primary button--lg margin-right--md"
                to="/docs/login/1">
                 Гарын авлага →
              </Link>
              {/* <Link
                className="button button--secondary button--lg"
                to="/docs/category/qmenu-api">
                QMenu API →
              </Link> */}
            </div>
          </div>
        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
} 