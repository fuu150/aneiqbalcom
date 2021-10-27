import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <Helmet>
        <title>AneIqbal Blog</title>
      </Helmet>
      <h1>AneIqbalcom</h1>
      <p>AneIqbal.com is a site that contains interesting information content, guides, and reviews about technology. We try our best to provide content as informative and interesting as possible so that visitors get value for the time they give to visit our site. Click <a href="https://www.google.ws/url?sa=t&amp;url=https%3A%2F%2Fbit.ly%2F3maDXrA">bit.ly/3maDXrA</a> to see our blog.</p>
    </main>
  );
}

export default Index;
