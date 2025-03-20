import React, { Fragment, useRef } from "react";
import SunEditor from 'suneditor-react';


const SpkSunEditor = ({ width, height, placeholder, autofocus, setplugin, setcontent, appendcontent, defaultstyle, disable, hide, hidetoolbar, disabletoolbar, defaulContent, setoptions }) => {

  const editor = useRef();

  const getSunEditorInstance = (sunEditor) => {
    editor.current = sunEditor;
  };

  const handleChange = (content) => {
    ("Content changed:", content);
  };

  const handleScroll = (event) => {
    ("Scroll event:", event);
  };

  const handleClick = (event) => {
    ("Click event:", event);
  };

  const handleMouseDown = (event) => {
    ("Mouse down event:", event);
  };

  const handleInput = (event) => {
    ("Input event:", event);
  };

  const handleKeyUp = (event) => {
    ("Key up event:", event);
  };

  const handleFocus = (event) => {
    ("Focus event:", event);
  };

  const handleBlur = (event, editorContents) => {
    ("Blur event:", event, editorContents);
  };

  const handleKeyDown = (event) => {
    ("Key down event:", event);
  };

  const handleDrop = (event) => {
    ("Drop event:", event);
  };

  const handleImageUploadBefore = (data) => {
    ("Image upload before:", data);
    return true;
  };

  const handleImageUpload = (data) => {
    ("Image upload:", data);
  };

  const handleImageUploadError = (data) => {
    ("Image upload error:", data);
  };

  const handleVideoUploadBefore = (data) => {
    ("Video upload before:", data);
    return true;
  };

  const handleVideoUpload = (data) => {
    ("Video upload:", data);
  };

  const handleVideoUploadError = (data) => {
    ("Video upload error:", data);
  };

  const handleAudioUploadBefore = (data) => {
    ("Audio upload before:", data);
    return true;
  };

  const handleAudioUpload = (data) => {
    ("Audio upload:", data);
  };

  const handleAudioUploadError = (data) => {
    ("Audio upload error:", data);
  };

  const handleResizeEditor = (data) => {
    ("Editor resized:", data);
  };

  const handleCopy = (event, clipboardData) => {
    ("Copy event:", event, clipboardData);
    return true;
  };

  const handleCut = (event, clipboardData) => {
    ("Cut event:", event, clipboardData);
    return true;
  };

  const handlePaste = (data) => {
    ("Paste event:", data);
  };

  const imageUploadHandler = (data) => {
    ("Image upload handler:", data);
  };

  const toggleCodeView = (data) => {
    ("Toggle code view:", data);
  };

  const toggleFullScreen = (data) => {
    ("Toggle full screen:", data);
  };

  const showInline = (data) => {
    ("Show inline:", data);
  };

  const showController = (data) => {
    ("Show controller:", data);
  };

  const editorOptions = {
    ...setoptions,
  };

  return (
    <Fragment>
      <SunEditor setOptions={editorOptions} getSunEditorInstance={getSunEditorInstance}
        width={width} height={height} placeholder={placeholder} autoFocus={autofocus}
        setAllPlugins={setplugin} setContents={setcontent} appendContents={appendcontent}
        setDefaultStyle={defaultstyle} disable={disable} hide={hide} hideToolbar={hidetoolbar}
        disableToolbar={disabletoolbar} defaultValue={defaulContent}
        onChange={handleChange}
        onScroll={handleScroll}
        onClick={handleClick}
        onMouseDown={handleMouseDown}
        onInput={handleInput}
        onKeyUp={handleKeyUp}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onDrop={handleDrop}
        onImageUploadBefore={handleImageUploadBefore}
        onImageUpload={handleImageUpload}
        onImageUploadError={handleImageUploadError}
        onVideoUploadBefore={handleVideoUploadBefore}
        onVideoUpload={handleVideoUpload}
        onVideoUploadError={handleVideoUploadError}
        onAudioUploadBefore={handleAudioUploadBefore}
        onAudioUpload={handleAudioUpload}
        onAudioUploadError={handleAudioUploadError}
        onResizeEditor={handleResizeEditor}
        onCopy={handleCopy}
        onCut={handleCut}
        onPaste={handlePaste}
        imageUploadHandler={imageUploadHandler}
        toggleCodeView={toggleCodeView}
        toggleFullScreen={toggleFullScreen}
        showInline={showInline}
        showController={showController}

      />
    </Fragment>
  );
};

export default SpkSunEditor;
