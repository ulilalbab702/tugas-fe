import React, { useState } from "react";
import {
  IconOpinia,
  IconHome,
  IconPeople,
  IconChat,
  IconNotif,
  IconProfil,
  IconPerson,
  IconProfil2,
  IconCamera,
  IconStars,
  IconTrash,
  IconAchiev,
  IconArrow,
  IconProfil3,
  IconIdea,
  IconComment,
  IconSee,
  IconRepost,
  IconShare,
  IconReact,
  IconIdea2,
  IconSend,
  IconAll,
  IconAlls,
  IconArtikel,
  IconPoling,
  IconPetisi,
  IconOpini,
  IconEsai,
  IconResensi,
  IconCerpen,
  IconKuesioner,
  IconPilihanku,
  IconKata,
  IconPsiko,
  Tulis,
  IdeaWhite,
  ArtikelWhite,
  PolingWhite,
  PetisiWhite,
  ArrowWhite,
  EsaiWhite,
  ResensiWhite,
  CerpenWhite,
  PilihWHite,
  KataWhite,
  PsikoWhite,
  IconSearch,
} from "../asset/icons";
import { post, sampul } from "../asset/img";

const ProfilePage = () => {
  const [data, setData] = useState([
    {
      id: 1,
      foto: IconProfil3,
      name: "Ryudan Sesa",
      time: "10 menit",
      category: "Opini",
      caption: "Belajar Menjadi Manusia",
      postFoto: post,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into...",
      idea: 32,
      react: 23,
      comment: 15,
      see: 2,
      repost: 12,
    },
    {
      id: 2,
      foto: IconProfil3,
      name: "Ryudan Sesa",
      time: "10 menit",
      category: "Opini",
      caption: "Belajar Menjadi Manusia",
      postFoto: post,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into...",
      idea: 32,
      react: 23,
      comment: 15,
      see: 2,
      repost: 12,
    },
  ]);
  const [klik, setKlik] = useState(1);
  const [tulis, setTulis] = useState(0);
  const [submenu, setSubmenu] = useState(0);

  const _renderNav = () => {
    return (
      <div className="bg-white h-auto w-full p-3 shadow-md fixed top-0 z-50">
        <div className="px-4 flex flex-row justify-between items-center">
          <div className="">
            <img src={IconOpinia} className="w-28 h-auto" />
          </div>
          <div className="pl-24">
            <div className="flex flex-row justify-between items-center w-96 h-10 p-3 rounded bg-blue-50 bg-opacity-90">
              <input type="text" placeholder="Cari..." className="outline-none text-sm text-gray-400 w-full h-auto bg-blue-50 bg-opacity-90" />
              <img src={IconSearch} className="h-3 cursor-pointer" />
            </div>
          </div>
          <div className="flex flex-row w-auto gap-x-3 items-center">
            <div className="w-8 h-8 bg-gray-100 rounded-full p-2">
              <img src={IconHome} />
            </div>
            <div className="w-8 h-8 bg-gray-100 rounded-full p-2">
              <img src={IconPeople} />
            </div>
            <div className="w-8 h-8 bg-gray-100 rounded-full p-2">
              <img src={IconChat} />
            </div>
            <div className="w-8 h-8 bg-gray-100 rounded-full p-2">
              <img src={IconNotif} />
            </div>
            <img src={IconProfil} className="w-10 h-10" />
          </div>
        </div>
      </div>
    );
  };

  const _renderProfile = () => {
    return (
      <div className="flex justify-center mt-16 py-2">
        <div
          className="border rounded shadow w-full bg-white"
          style={{ maxWidth: "810px" }}
        >
          <img src={sampul} />
          <div className="flex flex-row justify-between items-center -mt-20 px-6 mb-8">
            <div className="flex flex-col">
              <img src={IconProfil2} className="border-white w-36" />
              <div className="w-9 h-9 rounded-full bg-gray-200 p-2 flex justify-center items-center -mt-10 ml-24">
                <img src={IconCamera} />
              </div>
            </div>
            <div className="px-4 flex flex-col -mb-6">
              <div className="max-w-max p-3 bg-white opacity-70 rounded">
                <div className="flex flex-row gap-x-6 text-xs font-bold">
                  <div className="flex flex-col items-center gap-y-1">
                    <p className="text-gray-500">Postingan</p>
                    <p>12</p>
                  </div>
                  <div className="flex flex-col items-center gap-y-1">
                    <p className="text-gray-500">Mengikuti</p>
                    <p>5</p>
                  </div>
                  <div className="flex flex-col items-center gap-y-1">
                    <p className="text-gray-500">Pengikut</p>
                    <p>5</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-4">
                <div className="flex flex-row gap-x-3 items-center">
                  <p className="font-semibold">Ryudan Sesa</p>
                  <img src={IconStars} className="w-auto h-5" />
                </div>
                <p className="text-xs text-gray-400 mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  <br /> typesetting industry. Lorem Ipsum has been the...
                </p>
              </div>
            </div>
            <div className="ml-auto flex flex-col justify-end items-end -mb-4">
              <div className="flex flex-row gap-x-2">
                <div className="w-9 h-9 bg-black rounded-full opacity-50 p-2 flex items-center justify-center">
                  <img src={IconCamera} className="w-4" />
                </div>
                <div className="w-9 h-9 bg-black rounded-full opacity-50 p-2 flex items-center justify-center">
                  <img src={IconTrash} className="w-3" />
                </div>
              </div>
              <button className="mt-5 w-40 p-2 rounded text-xs font-semibold text-white bg-turq">
                Edit Profil
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const _renderAchievment = () => {
    return (
      <div className="w-full h-14 p-3 bg-white shadow-md rounded">
        <div className="flex flex-row justify-between items-center px-2">
          <img src={IconAchiev} className="w-6" />
          <div className="px-6 text-xs">
            <p className="font-bold text-turq">Total Poin Anda</p>
            <p className="text-orange-500 font-bold">
              17.4{" "}
              <span className="text-gray-300 font-semibold"> Klaim hadiah</span>
            </p>
          </div>
          <img src={IconArrow} className="ml-auto" />
        </div>
      </div>
    );
  };

  const _renderProgresProfil = () => {
    return (
      <div className="mt-3 w-full p-4 px-5 bg-white shadow-md rounded flex items-center">
        <div className="flex flex-col items-center justify-center">
          <p className="text-xs flex justify-center items-center text-center">
            Melengkapi profil membantu kami memvalidasi akun Anda, dan
            memudahkan Opinian lainnya memahami Anda
          </p>
          <p className="text-gray-500 text-xs py-2">Lengkapi Profil Anda 5/8</p>
          <div className="w-full h-3 inline-flex border-2 border-turq">
            <div className="w-56 h-auto bg-orange-500"></div>
          </div>
        </div>
      </div>
    );
  };

  const _renderMenu = () => {
    return (
      <div className="w-full h-64 flex flex-col justify-center p-4 bg-white rounded shadow-md mt-4">
        <div className="bg-turqois bg-opacity-10 rounded p-2 flex flex-row items-center">
          <div
            className={
              klik === 1
                ? "w-7 h-7 rounded p-1 flex justify-center items-center bg-turq"
                : "w-7 h-7 rounded border p-1 flex justify-center items-center"
            }
          >
            <img src={IconAlls} className="w-4" />
          </div>
          <p
            className={
              klik === 1
                ? "text-turq cursor-pointer px-2 font-bold text-sm"
                : "text-black cursor-pointer px-2 font-bold text-sm"
            }
            onClick={() => {
              setKlik(1);
            }}
          >
            Semua
          </p>
        </div>
        <div className="rounded p-2 flex flex-row items-center">
          <div className="w-7 h-7 rounded border p-1 flex justify-center items-center text-gray-500">
            <img src={IconIdea} className="w-4" />
          </div>
          <p className="text-gray-400 text-sm cursor-pointer px-2">Idea</p>
        </div>
        <div className="rounded p-2 flex flex-row items-center">
          <div className="w-7 h-7 rounded border p-1 flex justify-center items-center fill-current text-gray-500">
            <img src={IconArtikel} className="w-4" />
          </div>
          <p
            className={
              klik === 2
                ? "text-blue-500 cursor-pointer px-2"
                : "text-gray-400 text-sm cursor-pointer px-2"
            }
            onClick={() => {
              setKlik(2);
            }}
          >
            Artikel
          </p>
        </div>
        <div className="rounded p-2 flex flex-row items-center">
          <div className="w-7 h-7 rounded border p-1 flex justify-center items-center fill-current text-gray-500">
            <img src={IconPoling} className="w-4" />
          </div>
          <p
            className={
              klik === 3
                ? "text-blue-500 cursor-pointer px-2"
                : "text-gray-400 text-sm cursor-pointer px-2"
            }
            onClick={() => {
              setKlik(3);
            }}
          >
            Poling
          </p>
        </div>
        <div className="rounded p-2 flex flex-row items-center">
          <div className="w-7 h-7 rounded border p-1 flex justify-center items-center fill-current text-gray-500">
            <img src={IconPetisi} className="w-4" />
          </div>
          <p className="text-gray-400 text-sm cursor-pointer px-2">Petisi</p>
        </div>
      </div>
    );
  };

  const _renderMenuArtikel = () => {
    switch (true) {
      case klik === 2:
        return (
          <>
            <div className="w-full h-64 p-4 bg-white rounded shadow-md mt-4 overflow-auto">
              <div className="overflow-auto">
                <div className="rounded p-2 flex flex-row items-center">
                  <div
                    className={
                      klik === 1
                        ? "w-8 h-8 rounded p-1 flex justify-center items-center bg-blue-500 fill-current text-white"
                        : "w-7 h-7 rounded border p-1 flex justify-center items-center"
                    }
                  >
                    <img src={klik === 1 ? IconAlls : IconAll} />
                  </div>
                  <p
                    className={
                      klik === 1
                        ? "text-blue-500 cursor-pointer px-2 font-semibold"
                        : "text-gray-400 text-sm cursor-pointer px-2"
                    }
                    onClick={() => {
                      setKlik(1);
                    }}
                  >
                    Semua
                  </p>
                </div>
                <div className="bg-turqois bg-opacity-10 rounded p-2 flex flex-row items-center">
                  <div className="w-7 h-7 rounded p-1 flex justify-center items-center bg-turq">
                    <img src={IconOpini} className="w-4" />
                  </div>
                  <p className="text-turq cursor-pointer px-2 font-bold text-sm">
                    Opini
                  </p>
                </div>
                <div className="rounded p-2 flex flex-row items-center">
                  <div className="w-7 h-7 rounded border p-1 flex justify-center items-center text-gray-500">
                    <img src={IconEsai} className="w-4" />
                  </div>
                  <p className="text-gray-400 text-sm cursor-pointer px-2">
                    Esai
                  </p>
                </div>
                <div className="rounded p-2 flex flex-row items-center">
                  <div className="w-7 h-7 rounded border p-1 flex justify-center items-center text-gray-500">
                    <img src={IconResensi} className="w-4" />
                  </div>
                  <p className="text-gray-400 text-sm cursor-pointer px-2">
                    Resensi
                  </p>
                </div>
                <div className="rounded p-2 flex flex-row items-center">
                  <div className="w-7 h-7 rounded border p-1 flex justify-center items-center text-gray-500">
                    <img src={IconCerpen} className="w-4" />
                  </div>
                  <p className="text-gray-400 text-sm cursor-pointer px-2">
                    Cerpen
                  </p>
                </div>
                <div className="rounded p-2 flex flex-row items-center">
                  <div className="w-7 h-7 rounded border p-1 flex justify-center items-center text-gray-500">
                    <img src={IconArtikel} className="w-4" />
                  </div>
                  <p className="text-gray-400 text-sm cursor-pointer px-2">
                    Cerbung
                  </p>
                </div>
                <div className="rounded p-2 flex flex-row items-center">
                  <div className="w-7 h-7 rounded border p-1 flex justify-center items-center text-gray-500">
                    <img src={IconArtikel} className="w-4" />
                  </div>
                  <p className="text-gray-400 text-sm cursor-pointer px-2">
                    Puisi
                  </p>
                </div>
                <div className="rounded p-2 flex flex-row items-center">
                  <div className="w-7 h-7 rounded border p-1 flex justify-center items-center text-gray-500">
                    <img src={IconReact} className="w-4" />
                  </div>
                  <p className="text-gray-400 text-sm cursor-pointer px-2">
                    Humor
                  </p>
                </div>
              </div>
            </div>
          </>
        );
      case klik === 3:
        return (
          <>
            <div className="w-full h-64 p-4 bg-white rounded shadow-md mt-4">
              <div className="rounded p-2 flex flex-row items-center">
                <div
                  className={
                    klik === 1
                      ? "w-8 h-8 rounded p-1 flex justify-center items-center bg-blue-500 fill-current text-white"
                      : "w-7 h-7 rounded border p-1 flex justify-center items-center"
                  }
                >
                  <img src={klik === 1 ? IconAlls : IconAll} />
                </div>
                <p
                  className={
                    klik === 1
                      ? "text-blue-500 cursor-pointer px-2 font-semibold"
                      : "text-gray-400 text-sm cursor-pointer px-2"
                  }
                  onClick={() => {
                    setKlik(1);
                  }}
                >
                  Semua
                </p>
              </div>
              <div className="rounded p-2 flex flex-row items-center">
                <div className="w-7 h-7 rounded border p-1 flex justify-center items-center text-gray-500">
                  <img src={IconPilihanku} className="w-4" />
                </div>
                <p className="text-gray-400 text-sm cursor-pointer px-2">
                  Pilihanku
                </p>
              </div>
              <div className="rounded p-2 flex flex-row items-center">
                <div className="w-7 h-7 rounded border p-1 flex justify-center items-center text-gray-500">
                  <img src={IconKata} className="w-4" />
                </div>
                <p className="text-gray-400 text-sm cursor-pointer px-2">
                  Kata Kunci
                </p>
              </div>
              <div className="rounded p-2 flex flex-row items-center">
                <div className="w-7 h-7 rounded border p-1 flex justify-center items-center text-gray-500">
                  <img src={IconPsiko} className="w-4" />
                </div>
                <p className="text-gray-400 text-sm cursor-pointer px-2">
                  Psikografik
                </p>
              </div>
              <div className="bg-turqois bg-opacity-10 rounded p-2 flex flex-row items-center">
                <div className="w-7 h-7 rounded p-1 flex justify-center items-center bg-turq">
                  <img src={IconKuesioner} className="w-4" />
                </div>
                <p className="text-turq cursor-pointer px-2 font-bold text-sm">
                  Kuesioner
                </p>
              </div>
            </div>
          </>
        );
      default:
        return _renderMenu();
    }
  };

  const _renderMenuPost = () => {
    return (
      <div className="mt-3">
        {submenu === 0 ? (
          <div
            className="w-36 h-10 px-2 cursor-pointer shadow-md rounded-full bg-turq flex flex-row justify-around items-center hover:bg-opacity-80"
            onClick={() => (tulis === 0 ? setTulis(1) : setTulis(0))}
          >
            <img src={Tulis} className="w-5" />
            <p className="text-2xs font-semibold text-white">Buat Postingan</p>
          </div>
        ) : null}

        {submenu === 1 ? (
          <div className="flex flex-col">
            <div
              className="w-36 h-10 px-4 cursor-pointer shadow-md rounded-full bg-turq flex flex-row items-center hover:bg-opacity-80"
              onClick={() => {
                setSubmenu(0);
                setTulis(1);
              }}
            >
              <img src={ArrowWhite} className="w-3" />
              <p className="text-xs font-semibold text-white px-8">Artikel</p>
            </div>
            <div className="h-44 overflow-x-auto flex flex-col gap-1 mt-3">
              <div className="flex flex-row items-center w-28 h-10 bg-white shadow rounded-full p-2 cursor-pointer">
                <div className="w-7 h-7 rounded-full bg-turq p-1 flex items-center justify-center">
                  <img src={IconOpini} />
                </div>
                <p className="text-xs font-semibold px-2">Opini</p>
              </div>
              <div className="flex flex-row items-center w-28 h-10 bg-white shadow rounded-full p-2 cursor-pointer">
                <div className="w-7 h-7 rounded-full p-1 bg-turq flex items-center justify-center">
                  <img src={EsaiWhite} />
                </div>
                <p className="text-xs font-semibold px-2">Esai</p>
              </div>
              <div className="flex flex-row items-center w-28 h-10 bg-white shadow rounded-full p-2 cursor-pointer">
                <div className="w-7 h-7 rounded-full bg-turq p-1 flex items-center justify-center">
                  <img src={ResensiWhite} />
                </div>
                <p className="text-xs font-semibold px-2">Resensi</p>
              </div>
              <div className="flex flex-row items-center w-28 h-10 bg-white shadow rounded-full p-2 cursor-pointer">
                <div className="w-7 h-7 rounded-full bg-turq p-2">
                  <img src={CerpenWhite} />
                </div>
                <p className="text-xs font-semibold px-2">Cerpen</p>
              </div>
              <div className="flex flex-row items-center w-28 h-10 bg-white shadow rounded-full p-2 cursor-pointer">
                <div className="w-7 h-7 rounded-full bg-turq p-2">
                  <img src={PetisiWhite} />
                </div>
                <p className="text-xs font-semibold px-2">Cerbung</p>
              </div>
              <div className="flex flex-row items-center w-28 h-10 bg-white shadow rounded-full p-2 cursor-pointer">
                <div className="w-7 h-7 rounded-full bg-turq p-1">
                  <img src={EsaiWhite} />
                </div>
                <p className="text-xs font-semibold px-2">Puisi</p>
              </div>
              <div className="flex flex-row items-center w-28 h-10 mb-2 bg-white shadow rounded-full p-2 cursor-pointer">
                <div className="w-7 h-7 rounded-full bg-turq p-2">
                  <img src={ArtikelWhite} />
                </div>
                <p className="text-xs font-semibold px-2">Humor</p>
              </div>
            </div>
          </div>
        ) : null}

        {submenu === 2 ? (
          <div className="flex flex-col gap-1">
            <div
              className="w-36 h-10 px-4 cursor-pointer shadow-md rounded-full bg-turq flex flex-row items-center hover:bg-opacity-80"
              onClick={() => {
                setSubmenu(0);
                setTulis(1);
              }}
            >
              <img src={ArrowWhite} className="w-3" />
              <p className="text-xs font-semibold text-white px-8">Poling</p>
            </div>
            <div className="flex flex-row items-center w-32 h-10 bg-white shadow rounded-full p-2 mt-3 cursor-pointer">
              <div className="w-7 h-7 rounded-full bg-turq p-1 flex items-center justify-center">
                <img src={PilihWHite} className="w-6" />
              </div>
              <p className="text-2xs font-semibold px-2">Pilihanku</p>
            </div>
            <div className="flex flex-row items-center w-32 h-10 bg-white shadow rounded-full p-2 cursor-pointer">
              <div className="w-7 h-7 rounded-full bg-turq flex items-center justify-center">
                <img src={KataWhite} className="w-7" />
              </div>
              <p className="text-2xs font-semibold px-2">Kata Kunci</p>
            </div>
            <div className="flex flex-row items-center w-32 h-10 bg-white shadow rounded-full p-2 cursor-pointer">
              <div className="w-7 h-7 rounded-full bg-turq flex items-center justify-center">
                <img src={PsikoWhite} className="w-8" />
              </div>
              <p className="text-2xs font-semibold px-2">Psikografik</p>
            </div>
            <div className="flex flex-row items-center w-32 h-10 bg-white shadow rounded-full p-2 cursor-pointer">
              <div className="w-7 h-7 rounded-full bg-turq p-1 flex items-center justify-center">
                <img src={IconKuesioner} className="w-5" />
              </div>
              <p className="text-2xs font-semibold px-2">Kuesioner</p>
            </div>
          </div>
        ) : null}
        {tulis === 1 ? _menuTulisPost() : null}
      </div>
    );
  };

  const _menuTulisPost = () => {
    return (
      <div className="flex flex-col mt-3 gap-1 h-44">
        <div className="flex flex-row items-center w-24 h-10 bg-white shadow rounded-full p-2 cursor-pointer">
          <div className="w-7 h-7 rounded-full bg-turq p-2">
            <img src={IdeaWhite} />
          </div>
          <p className="text-xs font-semibold px-2">Idea</p>
        </div>
        <div
          className="flex flex-row items-center w-24 h-10 bg-white shadow rounded-full p-2 cursor-pointer"
          onClick={() => {
            setSubmenu(1);
            setTulis(0);
          }}
        >
          <div className="w-7 h-7 rounded-full bg-turq p-2 cursor-pointer">
            <img src={ArtikelWhite} />
          </div>
          <p className="text-xs font-semibold px-2">Artikel</p>
        </div>
        <div
          className="flex flex-row items-center w-24 h-10 bg-white shadow rounded-full p-2 cursor-pointer"
          onClick={() => {
            setSubmenu(2);
            setTulis(0);
          }}
        >
          <div className="w-7 h-7 rounded-full bg-turq p-2 flex items-center cursor-pointer">
            <img src={PolingWhite} className="h-4" />
          </div>
          <p className="text-xs font-semibold px-2">Poling</p>
        </div>
        <div className="flex flex-row items-center w-24 h-10 bg-white shadow rounded-full p-2 cursor-pointer">
          <div className="w-7 h-7 rounded-full bg-turq p-2">
            <img src={PetisiWhite} />
          </div>
          <p className="text-xs font-semibold px-2">Petisi</p>
        </div>
      </div>
    );
  };

  const _renderPost = () => {
    return (
      <div>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full rounded bg-white shadow-md border mb-4 flex flex-col"
            >
              <div className="p-4">
                <div className="flex flex-row justify-between items-center">
                  <img src={item.foto} className="w-10" />
                  <div className="flex flex-col justify-center px-3">
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-2xs text-gray-500">
                      {item.time} lalu{" "}
                      <span className="font-bold text-turq">
                        {item.category}
                      </span>
                    </p>
                  </div>
                  <p className="ml-auto text-3xl">...</p>
                </div>
                <p className="mt-5 font-semibold text-sm mb-1">
                  {item.caption}
                </p>
              </div>
              <div className="flex flex-col">
                <div className="bg-white border w-6 h-6 rounded-full border-blue-500 p-1 z-10 -mb-9 ml-98 flex items-center justify-center">
                  <img src={IconPerson} className="w-3" />
                </div>
                <img src={item.postFoto} className="w-full h-auto z-0" />
              </div>
              <div className="p-4">
                <p className="text-3xs font-semibold text-gray-500">
                  {item.desc}{" "}
                  <span className="italic cursor-pointer text-turq">
                    {" "}
                    Selengkapnya
                  </span>
                </p>
                <div className="flex flex-row justify-between items-center mt-4">
                  <div className="flex flex-row items-center text-2xs text-gray-400 font-semibold gap-x-1 cursor-pointer">
                    <img src={IconIdea2} className="w-5" />
                    <p>{item.idea}</p>
                  </div>
                  <div className="flex flex-row items-center text-2xs text-gray-400 font-semibold gap-x-1 cursor-pointer">
                    <img src={IconReact} className="w-6" />
                    <p>{item.react}</p>
                  </div>
                  <div className="flex flex-row items-center text-2xs text-gray-400 font-semibold gap-x-1 cursor-pointer">
                    <img src={IconComment} className="w-5" />
                    <p>{item.comment}</p>
                  </div>
                  <div className="flex flex-row items-center text-2xs text-gray-400 font-semibold gap-x-1 cursor-pointer">
                    <img src={IconSee} className="w-6" />
                    <p>{item.see}</p>
                  </div>
                  <div className="flex flex-row items-center text-2xs text-gray-400 font-semibold gap-x-1 cursor-pointer">
                    <img src={IconRepost} className="w-4" />
                    <p>{item.repost}</p>
                  </div>
                  <img src={IconShare} className="ml-16 w-4 cursor-pointer" />
                </div>
              </div>
              <hr className="border border-gray-200" />
              <div className="p-4">
                <div className="flex flex-row items-center border-2 rounded-full p-1">
                  <img src={IconProfil2} className="w-7 cursor-pointer" />
                  <input
                    type="text"
                    className="p-2 text-2xs w-full h-5 text-gray-500 focus:outline-none"
                    placeholder="Tulis Komentar"
                  />
                  <div className="w-auto h-auto rounded-full p-2 flex items-center justify-center cursor-pointer bg-turq">
                    <img src={IconSend} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="bg-gray-50 mb-8">
      {_renderNav()}
      {_renderProfile()}
      <div className="flex flex-row justify-center mt-1 gap-x-4">
        <div className="w-full rounded" style={{ maxWidth: "355px" }}>
          {_renderAchievment()}
          {_renderProgresProfil()}
          {_renderMenuArtikel()}
          {_renderMenuPost()}
        </div>
        <div className="w-full rounded" style={{ maxWidth: "440px" }}>
          {_renderPost()}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
