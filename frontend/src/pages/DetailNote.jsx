import { LoaderIcon, Trash2Icon, ArrowLeftIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams, Link } from "react-router-dom";

const DetailsNote = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  const fetchNotes = async () => {
    try {
      const url = `http://localhost:3000/api/notes/${id}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(
          `Failed to fetch: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();
      setNote(data.singleNote);
    } catch (error) {
      console.error("Error Fetching the single note", error);
      toast.error("Failed to fetch the note");
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchNotes();
  }, [id]);

  const handleDelete = async () => {
    // Add deletion logic here
    if (window.confirm("Are you sure you want to delete this note?"));
    try {
      const url = `http://localhost:3000/api/notes/${id}`;
      const response = await fetch(url, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to Delete the note");
      }
      toast.success("Note Deleted Successfully.");
      navigate("/");
    } catch (error) {
      console.log("Error deleting the note.", error);
      toast.error("Failed to delete note.");
    }
  };

  const handlSave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Please add a title and content");
      return;
    }

    setSaving(true);
    try {
      const url = `http://localhost:3000/api/notes/${id}`;
      const response = await fetch(
        url,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(note),
        },
        note
      );

      if (!response.ok) {
        throw new Error("Failed to update note");
      }
      navigate("/");
      toast.success("Note updated successfully");
    } catch (error) {
      console.log("Error saving the note.", error);
      toast.error("Failed to update the note");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-12 text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 px-4 py-12">
      <div className="w-full max-w-2xl mx-auto space-y-10">
        {/* Top Actions */}
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition"
          >
            <ArrowLeftIcon className="size-5" />
            <span className="font-medium">Back to Notes</span>
          </Link>

          <button
            className="btn btn-sm btn-outline btn-error flex items-center gap-2"
            onClick={handleDelete}
          >
            <Trash2Icon className="size-5" />
            <span>Delete Note</span>
          </button>
        </div>

        {/* Note Edit Card */}
        <div className="card bg-base-100 shadow-xl border border-base-300">
          <div className="card-body space-y-6">
            {/* Title Field */}
            <div>
              <label className="label">
                <span className="label-text font-medium text-base">Title</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Enter title"
                value={note.title}
                onChange={(e) => setNote({ ...note, title: e.target.value })}
              />
            </div>

            {/* Content Field */}
            <div>
              <label className="label">
                <span className="label-text font-medium text-base">
                  Content
                </span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full h-40 resize-none"
                placeholder="Write your note here..."
                value={note.content}
                onChange={(e) => setNote({ ...note, content: e.target.value })}
              />
            </div>
            <div className="card-actions justify-end" onClick={handlSave}>
              {" "}
              <button className="btn btn-primary" disabled={saving}>
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsNote;
