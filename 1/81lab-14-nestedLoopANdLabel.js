
            var teamJ = "";
            var teamMember = 0;
            team:
                    for (var outCount = 1; outCount < 3; outCount++) {
                jersey:
                        for (var inCount = 20; inCount < 35; inCount++) {
                    if (inCount == 22 || inCount == 29 ) {
                        continue jersey;
                    }
                    if (teamMember == 13) {
                        teamMember = 0;
                    }
                    teamMember++;
                    teamJ += "Team " + outCount + " Member " + teamMember + " Jersey Number " + inCount + "<br/>";
                }
            }
            document.write(teamJ);
        