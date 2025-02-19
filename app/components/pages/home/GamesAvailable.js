"use client";
import React, { useState } from "react";

export default function GamesAvailable() {
  const games = [
    {
      id: "bgmi",
      name: "BGMI",
      image: "/homepage/pubg_1.jpg",
      title: "Battle Ground Mobile India",
      users: "75% User Playing",
      defaultSize: 70,
    },
    {
      id: "cod",
      name: "Call of Duty",
      image: "/homepage/cod.jpg",
      title: "Call of Duty: Warzone",
      users: "60% User Playing",
      defaultSize: 27,
    },
    {
      id: "freefire",
      name: "Free Fire",
      image: "/homepage/freefire.jpg",
      title: "Garena Free Fire",
      users: "50% User Playing",
      defaultSize: 26,
    },
  ];

  const [hoveredTab, setHoveredTab] = useState(null);
  const [selectedGame, setSelectedGame] = useState(games[0].id); // Default selected game

  const handleMouseEnter = (gameId) => {
    setHoveredTab(gameId);
  };

  const handleMouseLeave = () => {
    setHoveredTab(null);
  };

  return (
    <section className="games_section">
      <div className="main_games_section">
        <div className="game_list d-flex">
          <div className="available_games_heading">
            <p className="gradient-text">Games Available</p>
            <span className="games_vr_line"></span>
            <span className="games_vr_line_right"></span>
          </div>

          <span className="games_vr_line"></span>
          <span className="games_vr_line_right"></span>

          <div className="list_of_games">
            {games.map((game) => (
              <p
                key={game.id}
                id={`${game.id}_tab`}
                style={{
                  fontSize: hoveredTab === game.id ? "70px" : game.defaultSize + "px",
                  fontWeight: "bold",
                  transition: "font-size 0.3s ease",
                }}
                onMouseEnter={() => handleMouseEnter(game.id)}
                onMouseLeave={handleMouseLeave}
                onClick={() => setSelectedGame(game.id)}
              >
                {game.name}
              </p>
            ))}
          </div>
        </div>

        {/* Right-side card updates dynamically */}
        <div className="game_image_container">
          <div className="card poster_div">
            <img
              src={games.find((game) => game.id === selectedGame)?.image}
              className="poster_image"
              alt={games.find((game) => game.id === selectedGame)?.name}
              height={300}
            />
            <div className="card-body">
              <h5 className="game_name">
                {games.find((game) => game.id === selectedGame)?.name}
              </h5>
              <p className="game_title">
                {games.find((game) => game.id === selectedGame)?.title}{" "}
                <span style={{ color: "red", fontWeight: "bold" }}>
                  {games.find((game) => game.id === selectedGame)?.users}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
