```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // Simulate a slow API call
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 3000)); // Simulate a 3-second delay
      setData({ message: 'Data from API' });
    };
    fetchData();
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>{data.message}</p>
    </div>
  );
}
```