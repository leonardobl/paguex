import FailedProgressIcon from "/assets/svg/FailedProgress.svg";
import FinishProgressIcon from "/assets/svg/FinishedProgress.svg";
import InProgressIcon from "/assets/svg/InProgress.svg";
import CloseIcon from "/assets/svg/Close.svg";
import { IFileCustom, useInputFile } from "./useInputFile";
import { FileUploader } from "react-drag-drop-files";
import { useEffect } from "react";
import * as S from "./styles";
import { textFileTruncate } from "../../../utils/textTruncate";

type InputFileProps = {
  onChange: (file: IFileCustom) => void;
  fileTypes: string[];
};

export const InputFile = ({ onChange, fileTypes }: InputFileProps) => {
  const { dropHandler, file, handleClose } = useInputFile();

  // const fileTypes = ["JPG", "PNG", "GIF"];
  // const fileTypes = ["pdf", "txt"];

  useEffect(() => {
    onChange && onChange(file as IFileCustom);
  }, [file, onChange]);

  return (
    <>
      <S.Container>
        <S.WrapperInputFile>
          <FileUploader
            dropMessageStyle={{
              backgroundColor: "#ECF0F8",
              borderRadius: 12,
              border: "none",
            }}
            handleChange={dropHandler}
            name="file"
            hoverTitle=" "
            types={fileTypes}
          >
            <S.DragDrop>
              <S.DropPlusIcon src="/assets/svg/dropplus.svg" alt="icone mais" />
              <p>Clique para adicionar ou arraste e solte um arquivo aqui.</p>
            </S.DragDrop>{" "}
          </FileUploader>
        </S.WrapperInputFile>
        <div className="container-list-files">
          {file && (
            <div className="content-card-list-files">
              <div className="thumb-image">
                <img
                  src={
                    file.status === "IN_PROGRESS"
                      ? InProgressIcon
                      : file.status === "FINISH_PROGRESS"
                      ? FinishProgressIcon
                      : FailedProgressIcon
                  }
                  alt="In Progress React"
                />
              </div>
              <div className="content-file">
                <div className="file-title primary-text">
                  {textFileTruncate({ text: file?.file?.name, limit: 30 })}
                </div>
                <div className="file-size secondary-text">
                  {file.sizeFormatted}
                </div>
                <div className="file-progress">
                  <div className="bar-progress">
                    <div
                      className={`file-progress-bg ${file.status.toLowerCase()}`}
                      style={{ width: `${file.progress ?? 0}%` }}
                    ></div>
                  </div>
                  <div className="count-progress secondary-text">{`${
                    file.progress ?? 0
                  }%`}</div>
                </div>
              </div>
              <div className="handle-action-upload">
                <img
                  src={CloseIcon}
                  onClick={handleClose}
                  alt="Cancelar"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          )}
        </div>
      </S.Container>
    </>
  );
};
