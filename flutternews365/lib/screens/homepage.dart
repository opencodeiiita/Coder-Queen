// ignore_for_file: unused_import, prefer_const_constructors

import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return NestedScrollView(
        headerSliverBuilder: (context, value) {
          return [
            SliverToBoxAdapter(
              child: Padding(
                padding: const EdgeInsets.fromLTRB(25, 10, 25, 25),
                child: Align(
                  alignment: Alignment.centerLeft,
                  child: Text(
                    "Top news headlines",
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontFamily: "Times",
                      fontSize: 34,
                      fontWeight: FontWeight.w700,
                    ),
                  ),
                ),
              ),
            ),
          ];
        },
        body: Container());
  }
}
