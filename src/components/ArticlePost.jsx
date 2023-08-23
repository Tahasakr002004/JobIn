import React from 'react';
import ReactPlayer from "react-player";
import styled from "styled-components";






function ArticlePost (  {props}  ) {
  console.log( 'propsActor:',props.actor.image);
  let actorImg = props.actor.image;
  return (
    <Article >
      <SharedActor>
        <a>
          <img src={props.actor ? '/images/user.svg' : '/images/user.svg'} loading="lazy" alt="user-photo" />
          <div>
            <span>{props.actor?.title}</span>
            <span>{props.actor?.description}</span>
            <span>
              {props.actor?.date.toDate().toLocaleDateString()}
            </span>
          </div>
        </a>
        <button>
          <img src="/images/ellipsis.svg" alt="" />
        </button>
      </SharedActor>
      <Description>{props.description}</Description>
      <SharedImg>
        <a>
          {!props.shareImg && props.video ? (
            <ReactPlayer width="100%" url={props.video} />
          ) : (
            props.shareImg && <img src={props.shareImg} />
          )}
        </a>
      </SharedImg>
      <SocialCounts>
        <li>
          <button>
            <img
              src="https://static-exp1.licdn.com/sc/h/2uxqgankkcxm505qn812vqyss"
              alt=""
            />
            <img
              src="https://static-exp1.licdn.com/sc/h/f58e354mjsjpdd67eq51cuh49"
              alt=""
            />
            <span>{props.likes}</span>
          </button>
        </li>
        <li>
          <a>{props.comments} comments</a>
        </li>
        <li>
          <a>{props.shares}share</a>
        </li>
      </SocialCounts>
      <SocialActions>
        <button>
          <img src="/images/like-icon.svg" alt="" />
          <span>Like</span>
        </button>
        <button>
          <img src="/images/comment-icon.svg" alt="" />
          <span>Comment</span>
        </button>
        <button>
          <img src="/images/share-icon.svg" alt="" />
          <span>Share</span>
        </button>
        <button>
          <img src="/images/send-icon.svg" alt="" />
          <span>Send</span>
        </button>
      </SocialActions>
    </Article>
  );
}

//////////////////////////////
// const CommonCard = styled.div`
//   text-align: center;
//   overflow: hidden;
//   margin-bottom: 8px;
//   background-color: #fff;
//   border-radius: 5px;
//   position: relative;
//   box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 1px rgb(0 0 0 / 20%);
// `;
const Article = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 1px rgb(0 0 0 / 20%);
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;
const SharedActor = styled.div`
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }
        &:nth-child(2),
        &:nth-child(3) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    ouline: none;
  }
`;
const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;
const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  diplay: block;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;
const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: center;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
      align-items: center;
      border: none;
      background-color: white;
    }
  }
`;
const SocialActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 100%;
  flex-wrap: wrap;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;
  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: rgba(0, 0, 0, 0.6);
    border: none;
    background-color: white;
    cursor: pointer;
    border-radius: 5px;
    transition: background 0.3s;
    width: calc(100% / 4);
    height: 60px;
    justify-content: center;

    &:hover {
      background: rgba(0, 0, 0, 0.08);
    }
    @media (min-width: 768px) {
      span {
        margin-left: 8px;
        margin-top: 3px;
        font-weight: 600;
      }
    }
  }
`;
// const mapStateToProps = (state) => {
//   return {
//     loading: state.articleState.loading,
//     user: state.userState.user,
//     articles: state.articleState.articles,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getArticles: () => dispatch(getArticlesAPI()),
//   };
// };
export default ArticlePost;