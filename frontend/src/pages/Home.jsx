import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import RateLimitedUi from "../components/RateLimitedUi";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard";
import NotesNotFound from "../components/NotesNotFound";

const Home = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const url = "http://localhost:3000/api/notes";
      const response = await fetch(url, { method: "GET" });

      if (response.status === 429) {
        setIsRateLimited(true);
        setNotes([]); // optional
        return;
      }

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await response.json();
      setNotes(data.notes);
      setIsRateLimited(false);
      console.log(data);
    } catch (error) {
      console.log("Error while fetching the Notes", error);
      toast.error("Failed to load notes");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen h-full">
      <Navbar />
      {isRateLimited && <RateLimitedUi />}

      {notes.length === 0 && !isRateLimited && <NotesNotFound />}

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && (
          <div className="text-center w-full text-primary py-10">
            Loading Notes...
          </div>
        )}

        {notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {notes.map((note) => (
              <NoteCard note={note} key={note._id} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
