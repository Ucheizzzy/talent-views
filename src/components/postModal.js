import React, { useContext, useState, useRef, useEffect } from "react";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import {
  ChatBubble,
  Favorite,
  FavoriteBorder,
  Home,
  Share,
  LocationOn,
  Person,
  Create,
  People,
  DashboardOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/postmodal.modules.css";
import Fullpost from "./fullpost";
import { AuthContext } from "../authContext/authContext";
import { withRouter, useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { API_URL } from "../BaseUrl/baseurl";
import authHeader from "../services/auth-header";

const PostModal = ({ posts }) => {
  const location = useLocation();
  const history = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const { data } = await axios.get(`${API_URL}post/${id}`);
      setPost(data?.data?.post);
    };
    getPost();

    const getProfile = async () => {
      const { data } = await axios.get(API_URL + "user/profile", {
        headers: authHeader(),
      });
      setProfile(data?.data);
    };
    getProfile();
  }, [id]);

  if (post.length === 0) {
    return null;
  }

  // const backArrow = () => {
  //   let currentPostId = post;
  //   let currentPostIndex = 0;

  //   currentPostIndex = posts.findIndex(
  //     (postData, index) => postData.id === currentPostId.id
  //   );

  //   if (currentPostIndex > 0) {
  //     currentPostIndex--;
  //     history(`/community/${post.id}`);
  //     setPost(posts[currentPostIndex]);
  //   }
  // };

  const backArrow = () => {
    let currentPostIndex = posts.findIndex(postData => postData.id === post.id);
    
    if (currentPostIndex > 0) {
      currentPostIndex--;
      const currentPost = posts[currentPostIndex];
      history(`/community/${currentPost.id}`);
      setPost(currentPost);
    }
  };
  

  const forwardArrow = () => {
    const nextPostId = post.id;
    const nextPostIndex = posts.findIndex(
      (postData) => postData.id === nextPostId
    );
  
    if (nextPostIndex < posts.length - 1) {
      const currentPostIndex = nextPostIndex + 1;
      const currentPost = posts[currentPostIndex];
      history(`/community/${currentPost.id}`);
      setPost(currentPost);
    }
  };
  

  return (
    <>
      <div className="modal-Container">
        <div className="modalBackground-1">
          <div className="modalLeft left" onClick={backArrow}>
            <ArrowBackIosRoundedIcon />
          </div>
          <div className="modalRight right" onClick={forwardArrow}>
            <ArrowForwardIosRoundedIcon />
          </div>

          <div class="modalContainer-1">
            <div className="titleCloseBtn-1">
              <button
                onClick={(e) => {
                  history("/community");
                  e.stopPropagation();
                }}
              >
                {" "}
                X{" "}
              </button>
            </div>
            <Fullpost profile={profile} post={post} />
          </div>
        </div>
      </div>
    </>
  );
};
export default PostModal;
