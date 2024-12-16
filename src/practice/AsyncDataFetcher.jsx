import React, {useState,useEffect} from 'react';

function AsyncDataFetcher() {

    const [data, setData] = useState('');
    const [loading, setLoading] = useState('');
    const [error, setError] = useState('');

// Write a function that performs an asynchronous operation and updates the React component's state based on the result.

        // Asynchronous function to fetch data
    const fetchData = async () => {
        try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Example API endpoint
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result); // Update state with the fetched data
        } catch (err) {
        setError(err.message); // Handle errors
        } finally {
        setLoading(false); // Set loading to false when the operation is complete
        }
    };

        // Use effect to trigger the fetchData function when the component mounts
    useEffect(() => {
        fetchData();
    }, []); // Empty dependency array to run only once when the component mounts


    return (
        <div>
          <h1>Asynchronous Data Fetching Example</h1>
          {loading && <p>Loading...</p>} {/* Show loading text while data is being fetched */}
          {error && <p>Error: {error}</p>} {/* Show error message if there's an error */}
          {data && (
            <ul>
              {data.slice(0, 5).map((post) => ( // Display the first 5 posts for demonstration
                <li key={post.id}>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
}

export default AsyncDataFetcher;