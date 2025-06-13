import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";
import toast from "react-hot-toast";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(title, content);
    if (!title.trim() || !content.trim()) {
      toast.error("All the fields are required.");
      return;
    }

    setLoading(true);

    try {
      const url = "http://localhost:3000/api/notes";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });
      if (!response.ok) {
        throw new Error("Failed to create note.");
      }

      toast.success("Note Created Successfully!");
      setTitle("");
      setContent("");
      navigate("/");
    } catch (error) {
      console.log("Error creating note...", error);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="max-w-xl mx-auto px-4 py-10">
        <Link to="/" className="btn btn-ghost mb-6">
          <ArrowLeftIcon className="size-5" />
          Back to Notes
        </Link>

        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-6">Create New Note</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-control mb-6">
                <label className="label">
                  <span className="label-text text-base">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter note title"
                  className="input input-bordered w-full"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-control mb-6">
                <label className="label">
                  <span className="label-text text-base">Content</span>
                </label>
                <textarea
                  placeholder="Enter note content"
                  className="textarea textarea-bordered w-full h-32"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary px-6"
                  disabled={loading}
                  type="submit"
                >
                  {loading ? "Creating..." : "Create Note"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNote;
