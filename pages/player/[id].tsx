import Audio from "@/components/Audio";
import SearchBar from "@/components/SearchBar";
import axios from "axios";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  AiFillStar,
  AiOutlineClockCircle,
  AiOutlineStar,
} from "react-icons/ai";
import { BsBook, BsBookmark, BsLightbulb, BsMic } from "react-icons/bs";
import { CgPlayButton } from "react-icons/cg";

interface Book {
  id: string;
  author: string;
  title: string;
  subTitle: string;
  imageLink: string;
  audioLink: string;
  totalRating: Number;
  averageRating: Number;
  keyIdeas: Number;
  type: string;
  status: string;
  subscriptionRequired: boolean;
  summary: string;
  tags: string[];
  bookDescription: string;
  authorDescription: string;
}

export default function Id() {
  const [data, setData] = useState<Book>();
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const response = await axios.get(
          `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
        );
        const json = await response.data;
        setData(json);
      };
      fetchData();
    }
  }, [id]);
  return (
    <>
      <SearchBar />
      <div className="max-w-[1070px] w-full mx-auto px-6">
        <div className="py-6 w-full">
          <div className="summary">
            <div className="audio__book--summary text-[16px]">
              <div className="audio__book--summary-title">
                <b>{data?.title}</b>
              </div>
              <div className="audio__book--summary-text">{data?.summary}</div>
            </div>
            <Audio />
          </div>
        </div>
      </div>
    </>
  );
}
