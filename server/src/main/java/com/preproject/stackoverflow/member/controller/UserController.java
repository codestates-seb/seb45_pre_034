package com.preproject.stackoverflow.member.controller;


import com.preproject.stackoverflow.member.dto.MemberPatchDto;
import com.preproject.stackoverflow.member.dto.SignupPostDto;
import com.preproject.stackoverflow.member.entity.SignupEntity;
import com.preproject.stackoverflow.member.mapper.MemberMapper;
import com.preproject.stackoverflow.member.service.MemberService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/members")
public class UserController {

    private final MemberService memberService;

    @Autowired
    public UserController(MemberService memberService) {
        this.memberService = memberService;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signUp(@RequestBody SignupPostDto signupPostDto) {
        // 실제 회원가입 로직을 signupPostDto를 통해 처리하고 결과를 반환
        // userService.signUp(signupRequest);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<MemberPatchDto> getUserInfo(@PathVariable Long userId) {
        // userId에 해당하는 유저 정보를 memberService를 통해 조회
        // MemberInfoDTO userInfo = userService.getUserInfo(userId);

        return new ResponseEntity<>(userInfo, HttpStatus.OK);
    }

    @PatchMapping("/{userId}")
    public ResponseEntity<?> updateUser(@PathVariable Long userId, @RequestBody MemberUpdateDTO updateRequest) {
        // userId에 해당하는 유저 정보를 memberService를 통해 업데이트
        // userService.updateUser(userId, updateRequest);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<?> deleteUser(@PathVariable Long userId) {
        // userId에 해당하는 유저 정보를 memberService를 통해 삭제
        // userService.deleteUser(userId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}