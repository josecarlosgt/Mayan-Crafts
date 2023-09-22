# Maori Fine Crafts

This website is a demo simulating an online shop selling authentic Mayan handmade crafts.

The site implements backend-as-a-service (BaaS) based on [Supabase](https://supabase.com/).

Supabase uses [PostgreSQL](https://www.postgresql.org/), one of the most popular open-source relational databases. The following link provides access to the use-case diagram and data model used by the Mayan handicrafts site.

- [System Analysis and Design](https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&page-id=G5joS5WQsq4Hca0EG5QD&title=Ecommerce%20Frontstore.drawio#R%3Cmxfile%3E%3Cdiagram%20id%3D%22qZy4j8M72FENCWA4GprZ%22%20name%3D%22Use-case%20Diagram%22%3E7Vlbb9s6DP41fmxhW7aTPObScwasA4Jlw9anQbUVWzi2lclKk%2BzXj7Kk%2BCK3XYu06cEKJIBJ0ZT08aNAyg6aF%2Ft%2FOd5kn1hCcsd3U04TBy0c3%2FfgD4oNTklHIS1W9JdRulq7pQmpOoaCsVzQTVcZs7IksejoMOds1zVbs9xexirGObG032giMqUdh26j%2F0BompmJPFePFNgYa0WV4YTtWip05aA5Z0yop2I%2FJ7lExuCi3vvnntHjwjgpxZ%2B8EH4u8Y8bln35Lirvurr7eLMcXYyUlzucb%2FWG9WLFwSDA2bZMiHTiOmi2y6ggqw2O5egOAgq6TBQ5SB48rmmez1nOOMglK8FopmcgXJD9vUv3joAATQgriOAHMNEvIIPhQclRoMRdExHf4J61ooEircQ66OnRdQMUPGisnoDb%2BHHcSJlMJd8aJFo4dUEFGPjhe1u4kcJlaMTFvj24OGhJzUmStE%2FWHrCwLrblMXlgQ6FOJcxTIh6wuydQrUiEA4EwOk5yLOhdd7lDwdEzLBmFjRx5ELhdHhx5YVyobeq32rnQdxR2HfmjniOFg%2BWo5spx28%2Bnj2fRZ0Uwj7P6QOIyhJwl21hUNqvyHE468ngmniLteiiN7bTzgoFo98E8Wdb5FmxLiHeGAY83CpnvhmfGDFmYTeOYVACTy3hC%2BNvCC%2FnRmfEKLLxmGK9As8AC39ZU6%2BHVQmQIsBOgFEZhl1XeAKu8B87dk6MUWijNt5UA59yCB%2BqejXzcFvk0FrIymEkwKNRY1%2FiW5EtWUUFZCSa3TICPlsE0p6kcEOz01PMDrwOqF9igogFMX6ymiCxMP%2BES6sv%2FL6TIn5wX0okFqX3aPadMu%2FTCbqUWjCeP1Gq1tCScws4IN8o9FcrhBGlR%2BRuPjdy4k8KhJfSdOa9fDY6G6fBeDT6tGnRfiKZn6yaic%2FLCH%2FVOodC9HIUh8iYepCmK%2FOexxCpV%2BqfWS7PEbhrOwRJzZHmd8yp88LQ6IbPMlc9jJ1PwfjKdgnN2x%2FUXcs5%2F59xrcs7uWP9CzqF3zr0m5%2Byu3%2FGjHNCaJfQOHlNRh1ep1qxee8PH6OeWmYGLqv5kMQUDP9js1Wt63Di6uohZAb1yLO%2BtVtDAkTVXPr9W5CJW91kLilOOCzMp7EvN210LqDsr7CUK9HJSj3XTFwMPZb9Qr3SlzbyB7rCgSSIHZ9UGx7RMr8laUgc1ms%2BaTbVKcPYf6d37cybkjUk9hUyOjQxeHc5wBj8I8FzmUwjLnIPsNTL8pDkXc1aCa0zr5CG4EjtSiRfoWvt3dk6%2FaQ2GrqDMVdUTulYQmw8%2BirzNNzF09Rs%3D%3C%2Fdiagram%3E%3Cdiagram%20id%3D%22G5joS5WQsq4Hca0EG5QD%22%20name%3D%22Activity%20Diagram%3A%20Purchase%20Products%22%3E7Zpdc6MqGMc%2FTS57RkSNvWzS7NlzcTqd7U5frnaIEmVWxUHSJPvpD0SIIrax3TTJmW1vKg8vwv%2F5AQ%2BYEZzm678ZKtN%2FaYyzkevE6xG8HrkuAMAT%2F6RlU1v8cVAbEkZiVagx3JFfWBkdZV2SGFdGQU5pxklpGiNaFDjihg0xRldmsQXNzLeWKMGW4S5CmW19IDFPa2voO439KyZJqt8MHJWTI11YGaoUxXTVMsHZCE4Zpbx%2BytdTnEnxtC51vS8v5O46xnDBh1S44DfzoloV0f108evm4fFps%2Flyod3zjLKlGvFEioZl04zGy4hXWqV6FHyjpWF0WcRYtg5GcLJKCcd3JYpk7krAIGwpzzOVrV6DGcfrFwcAdrIInjDNMWcbUURVcLW0G611WKdXjWOAVjttOSVQNqRYSHZNN3KJB6XYW9TzLfXuCV5tnU3LkhSJJBMxXgPK5UDPTUU3BKdWMbBU%2FIZz%2BtxicOQGmejGZM7EUyKfFozmfTqfWF3PgYa6nnNyRseWureZVMB1KIsxO7lkXSB9cHIgQ0uyqzhu0yj2oDOEz1ogL8cnVlK%2FrKXkLCbc0K47s%2FetlynN58vqSIL6hqBw3DObQY%2BgALgfpSiwFLUkEs2I8Aibcojwo5T5FRf63nHEZf6CZNmUZpRtK0Jn%2BycLc0Z%2F4lbOYqFyDqGqZ6oa2PMd9mgKPwxSd4CksYgKVZIyntKEFiibNda21FIdIkLIq4wkhbDNKedit4ITXMRXMiaVjZS4qC0q5g1flb1ZSpxtLTHuR5n4y9fJp3be9dpIbVSqHpYcy%2BuuE0OnSxbhARwKmhLM90aYNgwMZ4iTZ7Mnfb5VVW8pkavBDqLAXOvCTgt1v1SlDiC7XvwGM3AAM423owxVFYlMTDo%2BXRPecqlIPaly8rlxqEx8gD%2F1QWC%2FP8N%2Bf7Zmr98ze7XtN90OO1scBJ0m6oFafrcb8jthcHBkgOyD1wkAOoOFRAdb%2B8HzP8E7BHj2mfUPBc8fCF7rtuYcwHM7cdBQ8Lo7Jhx3Gvpo8Oxjvg3ea5GrjJXOKW71L%2B3TwHEDV%2Fto%2F%2F8OQjTa%2B%2FeC8TlNSa97fn7vXuCBI09J%2B6LjD90LxkP3guATvEOAd2mBt7vytW%2BEdtduB0ETtMBsMN2HpgFmw%2BkRDtqD18RPNA%2BBpt6trcvfnDLzq9hhFsq30Lj3Eurg3J0KJ9c1Yy0Peu%2FDyboT98JBOAlXok2rWCkLVC93GHhOb4df6le3vO5XQ3Pdg%2Fey%2Fc%2Fl7AavHh7mMHpc%2F5gEF%2Fcluei7O64X2xToxfZW6Jqi7Qfg2%2BYD8FUknEm4VOSaoISh3F6mtUV0rWnOmiYi%2Fuad%2BN4I2gtadCN8ZapKFMkvBvDab1LfaSkMktb%2BDwJiT2GLbDsrUxLH20tXcyYidUsbiSmC2WGOCmHnjG%2FfcHtez%2BTx3n5SEMnmJwQ1J80PMeDsPw%3D%3D%3C%2Fdiagram%3E%3Cdiagram%20id%3D%22fAKFOc9divsB3pqjNnwO%22%20name%3D%22Conceptual%20Data%20Model%22%3E7Vrfc5s4EP5rPNN7SAeBIe5jDU5%2FXHJN4%2FTaPt3IoIAmgDghxyZ%2FfVcgDFh2miZ2yAMznjFarVar%2Fb6VtcIjy03WHzjOogsWkHhkGsF6ZHkj00QIjeFLSopKYp86lSDkNFBKjWBO74kSGkq6pAHJO4qCsVjQrCv0WZoSX3RkmHO26qrdsLg7a4ZDognmPo516XcaiKiSTmyjkX8kNIzqmZGhehJcKytBHuGArVoiazayXM6YqJ6StUtiGbw6LtW4sz29G8c4ScVjBnye%2Flzky7D41zKyxddvs5WL7JPxpDJzh%2BOlWvHIdGIwOI1gBieUT7MTnyUJ4T4BzblgnNxwBpOahstSn2RiiWEiBycZKKeLXH7VVvIMp3LxolARdf5fyhVPF9i%2FDTlbpgFYjxkfWe%2BlsykVFKyVBpRm7YaHBQYVxbHKPCy3mqFSaYkb99sL2uGIPlE9YMF%2FY9fsGDQFWZfziAQW4CG5esHZLXGr9XkpS0FzekPjeEsEa%2FBpGoLAblrXDALpnQCs1nQVUUHmIJdTrSDVQMbuCL%2BJS0pFNAhICrIyoEQiLkfhmIYg9XygCOEbl2EcuLqXRmhDTshqwhIieAEqasBE0VnlszlW7VWTHU6dA1ErM2o9rBIy3FhuOAsPira7KezhM1SIb7YbWd%2FnH26n2eev%2F50gjcGXnAVL2Au28clXNIlxhQHwd656ZKT8iMbBOS7YUrqbCyBn3ZpGjNN70McNqpgLtVWZTkdjLkcqm5zkoHNZRxZtiS7wuqN4jnNRe8PiGGc5XZT%2ByYEJ5iFNp0wIluwDt1xT5RXsugcBG5ldtC1TR3uj00bbNJwjwW1qcH8K9mXiH6bfObmR7o8byZVa0XhvugnYlBYbGmWMpqJcsT2FDwTGNd7aIxt8cqGNmjZ8pDoXsIWCm5iWgBDgwIpIHnTQNPfsAK2dpk3o8aOQ359MOh3qZHceh751rFy3NPD%2FwQkZ4H9crj8BcbtvxMca4h7JfU4zQVk6AH804Cd9A2%2Fr%2B3wiz%2BoD5MeCHKG%2BMT%2FdcZSj%2FoD5ETEf9425o2F%2BhYWshQbQjwb6ad%2Bg67cOX3gARYxpfBIkGQq3Zxdu1lMLt82GcPg63dixu6tCXY40jTdnf%2F81pP2hSrnJ6y7lkH5v4y5zyJJyGxj48MJ86L3QQ%2B%2F0Sg%2BL4ez3Qvj3Xu%2BZ%2Bn5wTYe7nZfCv%2F%2FiD%2BkVf%2FODMBwIn3kgtJ96IJwc7TyoV350uMk%2F3E2%2B%2FcrPf%2Fplz3CX%2F9yy%2F2HMez%2FjmfrLOw1vEoSkpj%2BsloriisRY3vbPmh4tpK3wkTR4L%2F%2F4Ac3Z1T3h7Jpd4LSod%2FumL8Fp8KUkTfetOczKix%2Ftxk%2FZeGvXTW%2Fd7vQK1SrNn1EZkqp3TcWP2il4blmBVmNENmobVThkDB7e5yFkbMl98lCwKz1wKiQPksbYTZo2S3a90N8IeYnPXdfjXdxRc1zKzGp%2BmUy7%2B8v0zu5aqBaqBjUE1OxYVtcOMrcMVZHQDJVM3qz7GeTWX06%2BZnKjPyN3TWajHzLXh4Xfs3nPMeil2Oygw7DZ3rKD7EOxGZrNn84q9eave9bsFw%3D%3D%3C%2Fdiagram%3E%3Cdiagram%20name%3D%22Physical%20Data%20Model%22%20id%3D%222MrrYlgzu1AbThAJZA1t%22%3E7V1bc5s4FP41nml3Jhnf8OUxdpw2u26S2uls%2B9SRQTbqAqJCju3%2B%2Bj0CcbNsBxrfapjJBR3EkXTOJ33SQUCl0beXHxhyzU%2FUwFalXjWWlcZtpV6v1WpN%2BCckq0CitVuBYMaIITPFgjH5haWwKqVzYmAvlZFTanHipoU6dRys85QMMUYX6WxTaqVLddEMK4KxjixV%2Bi8xuBlIO1o1ln%2FEZGaGJdeq8oyNwsxS4JnIoIuEqDGoNPqMUh4c2cs%2BtoTxQrsE191tORtVjGGHZ7ng5sfVj4%2FmR3bFfqBhy2NtNPGuxAVCzQuy5rLFT4wac7BkUGm%2BCi0B9XfFIUcTIep5HDEuHdaoggBcwBFxMANBzU9bFnI94mcPJCaxjCFa0TkPFYWp3pQssTEK%2FCXyguuGoEwkhfIpKB%2FLyojTyCIzB451aL0oscewB3UZIo%2FLHCa3LXmomkpa7wUzjpcJkTTdB0xtzNkKssizLelFCeNG6NVFDIpaR8rMBCDqTSlEEoizSHXsKziQ7srjuobiut0%2BGwn09UzKyC%2FhKUtaNulHP70gtoUcgDUy1kQ96ndj3x%2FEsvrUosLZDnWw4m%2BRyWDUfUZshrkUuJQ43DeE1oMfME2%2Feq1VNKhrH9K1OA0%2FIjvjfep4nAGuhA4M7l1g4eIep65UauFpqJ9Jw4vjCeWc2lsRsLs7vI6LEAgZcdA4GAyaag%2F%2BZysQwAKcIGsEQyVyZlbgNn%2FkRLHbNvh2o7UjC6%2Bbfr2zUrDn1PIHP5MYBoaO21uYhOOxi3SRaQHk8VqX3d0JXndYwkONnA6SymKr5daGLBilHMShC80dw1O8HtXzDUDQFCBAfrjI4Z0T4yEcrIO8PQ%2B8TpzZMLiyda6AWW7v4dpeAZRJ3TEQ1CoZJROjVA%2FJKK2TM0o7OwyOM35gg4T6Djw6tDJ76%2BLppKOgQGcYijS%2BIy5WYcSGboNsd%2FtK4UzI5SzgUjwy6ZZkcnoy6Z6aTELFRSSTbmZvXTqZNGoKChxkY1%2FCdBOxAnNIdpQUjkMaanSy5JCjc0gta6zzcCSSI9R5YSTSyO6uiycRNdJpYE9nxOWEOmJJgpcFXozkQErhiKSpLmZLIjk%2BkWinJpJmjkXphRFJ1AVKItHUNSmxxT6AolNIDowUjkI0dQlbUsjxKaRzagrRcqxJL4xCtOy7Zi6eQtQVqejYXsW%2F335qRJyQQnJgpHgUoi5gSwo5OoVEW0tPRyHqTp3CUEgzs7sunkLU3TYuI7qoLNge8WaBSSQ7SopHIurunP7cAxditptMKsXbsv2be7ajGx77H%2FnLOGS2GUCewaKdGRjnsmdbU8OQBdqzrZWRyNAU4V7Pcs%2F2ngBTuOlAqwxL7n1NmZ9RTr5nu1XcqGSrjEpGplCjknKbXbHva%2BWASOEIpJsjGFUSyKEI5OT7tLs5nv26MAKJekBJIF01uFQ%2B9PP7cCkcmbTV9ewjMzD7fs%2BxvZtWCheejMKRucOT2qFIoF0uJvcenoy6xJ8Tnmyri8kChSfb5XoyMoW6nizDk28BTPEmBOWWl72vLvMzysnDk201yHB3akY52vqyXe55iUyxac%2BL%2F7q5738MsZwFUIpHJDleSlMSyaGI5ORhyra6gaZARJI9rHzxRKLuoNHlLriSSXIhpXBM0ilveJ0Bk5z%2BpRKd4t7x6pR3vCJTlHe89gmX4rFJhlfTYGOGw1AkWJrw1QhbSLy0ZBCfCQKWAZ3U6mk%2FYce4Ee%2Byh%2BRg9Asz%2Bkw%2FIWcVklB8zkaO8eiDi4kW45CIoFS2%2BppMfBMJoAyZvF0mT96GbOWrvyNWyHkqYGTs06NzpuMddgrfu8tDWttKJXIRLIyWdWSKXrqfuk0WCplv7BecqvAOxD0Jso2xrK29%2Bl3rrqEsaLu8KkaYoqi1pqi5riiwjaJob1DNEIs9I6jW8kEVLwn%2FmjhOXAWp%2BCKRWL0ZzuGW5Nfh3C7hfBg4dzc9S9OyBDmaYJXWTBwNrnRqw6LQf6xuzCnDU0b9VjyZK4%2FoMJuvt4DdIasz8cS%2FW8QRnJZfMgn0Qf1ilclCEl2n9XNO5en4KHXBhK1L1vSu9UV%2Fz2aqc8GEnv6H16YRG2YWcnIAAi1OPfvTjat6dcu8YNP8Id01lR0SW%2FtP9plCMw2iKJ3oDu3wedlkdzjYZzW6m14RtA6rB8qxtxMdruL9UCAB9rxyUyomG8ChKIkEz6YAtC0%2Ft%2BO5WCdTIvRVjUA9D9RXp4ALADv1%2BIzh8edhJu1KnUfDsa%2FFInpQyrvx3J0gD79%2FYwumsPalC4FVGNjo4srCL0GLsD5nwD6iKCj8vYBZXLpn0rklojwT7OcV%2FXlhYvEOOH%2FyHujjfgn%2BJDx4L4MYAuYu6kG9K42bXJbYlGlurUssEkrGg%2BGg%2FxzZP6iKO59AE0SToJVsBX1VtCt4dZ2fIfr0TlDrROGx5h1lAaPC3%2FuH8WAUFx0WlS6pD1wsN2VlKAuEamMN8rIVL5%2FnmJFX4b1Bwyalm4bN3Zd%2B8XDU0iTCfkK1BKQ4FR2FeK6FRBL5o4K8ESWgggwx6Ml8gRodDJY2oYFtWgk%2FIHVzjGaFItXzT9fBPv%2B%2BcO3jl4fnd38JaN2NHj9VRKAlpKTkZryYpqr9e%2Fjz9%2BP9QypzhMZEzif4fRTZ3j1d%2B3FWf4QEBdfxfTxR8ofR4xeRt%2Fctrt0rbd%2BEuv2a8pVefe70uwe2XZuyRU9IJ9m2uWHyWV%2Bf22WgW0jGHzcLJn3xJ%2BIag%2F8B%3C%2Fdiagram%3E%3C%2Fmxfile%3E)
- [Live demo](https://josecarlosgt.github.io/Mayan-Crafts/)
